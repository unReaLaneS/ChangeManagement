using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChangeManagementApp.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private CMAContext _context;

        public UserRepository(CMAContext context)
        {
            _context = context;
        }

        public async Task Create(User user)
        {
            user.UserType = _context.UserTypes.FirstOrDefault(t => t.Type == user.UserType.Type);
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public async Task Delete(User user)
        {
            _context.Users.Remove(user);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<User> ValidateLogin(User user)
        {
            return await _context.Users.Include(u=> u.UserType).FirstOrDefaultAsync(u => u.Username == user.Username && u.Password == user.Password);
            
        }

        public async Task<User> GetUserById(int id)
        {
            return await Task.Run(() => _context.Users.Find(id));
        }

        public IEnumerable<UserType> GetRoleTypes()
        {
            return _context.UserTypes.AsEnumerable();
        }

        public async Task<User> GetUserByUsername(string username)
        {
            return await Task.Run(() => _context.Users.FirstOrDefaultAsync(u => u.Username == username));
        }
    }
}