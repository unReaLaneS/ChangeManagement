using System.ComponentModel.DataAnnotations;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class User
    {
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public string Username { get; set; }

        [Required, MaxLength(50)]
        public string Password { get; set; }

        public UserType UserType { get; set; }

        public int UserTypeId { get; set; }
    }
}