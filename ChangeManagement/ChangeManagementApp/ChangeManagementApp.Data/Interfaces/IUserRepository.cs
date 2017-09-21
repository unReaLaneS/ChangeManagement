using ChangeManagementApp.BusinessEntities.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChangeManagementApp.Data.Interfaces
{
    public interface IUserRepository
    {
        Task Create(User user);

        Task Delete(User user);

        Task<bool> SaveChangesAsync();

        Task<User> ValidateLogin(User user);

        Task<User> GetUserById(int id);

        Task<User> GetUserByUsername(string username);
        IEnumerable<UserType> GetRoleTypes();
    }
}