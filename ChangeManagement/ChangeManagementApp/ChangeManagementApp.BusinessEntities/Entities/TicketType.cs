using System.Collections.Generic;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class TicketType
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public ICollection<Ticket> Tickets { get; set; }

    }
}