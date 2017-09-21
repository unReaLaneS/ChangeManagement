using System.Collections.Generic;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class TicketStatus
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public ICollection<Ticket> Tickets { get; set; }

    }
}