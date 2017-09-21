using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Services.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChangeManagementApp.Services.Interfaces
{
    public interface IUserService
    {
        Task Create(UserModel model);

        Task<UserModel> ValidateLogin(UserModel user);

        Task<bool> SaveChangesAsync();

        Task<User> FindUserById(int id);

        Task<User> FindUserByUsername(string username);

        IEnumerable<UserTypeModel> getRoleTypes();
    }
}