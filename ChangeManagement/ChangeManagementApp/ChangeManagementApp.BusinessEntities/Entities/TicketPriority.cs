using System.Collections.Generic;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class TicketPriority
    {
        public int Id { get; set; }
        public string Priority { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}