using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Data.Interfaces;
using ChangeManagementApp.Services.Helper;
using ChangeManagementApp.Services.Interfaces;
using ChangeManagementApp.Services.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChangeManagementApp.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task Create(UserModel model)
        {
            User user = Mapper.MapModelToUser(model);
            await _userRepository.Create(user);
        }

        public async Task<UserModel> ValidateLogin(UserModel model)
        {
            User user = Mapper.MapModelToUser(model);
            User response = await _userRepository.ValidateLogin(user);
            return Mapper.MapUserToModel(response);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _userRepository.SaveChangesAsync();
        }

        public async Task<User> FindUserById(int id)
        {
            return await _userRepository.GetUserById(id);
        }

        public async Task<User> FindUserByUsername(string username)
        {
            return await _userRepository.GetUserByUsername(username);
        }

        public IEnumerable<UserTypeModel> getRoleTypes()
        {
            var roleTypes = _userRepository.GetRoleTypes();
            var roleTypesModels = new List<UserTypeModel>();
            foreach (var role in roleTypes)
            {
                var roleType = Mapper.MapToUserTypeModel(role);

                roleTypesModels.Add(roleType);
            }

            return roleTypesModels;
        }
    }
}