using System.Collections.Generic;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class UserType
    {
        public int Id { get; set; }
        public string Type { get; set; }

        public ICollection<User> Users { get; set; }
    }
}