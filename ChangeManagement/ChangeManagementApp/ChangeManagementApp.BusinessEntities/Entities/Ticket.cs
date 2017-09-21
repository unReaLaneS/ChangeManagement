using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChangeManagementApp.BusinessEntities.Entities
{
    public class Ticket
    {
        public int Id { get; set; }

        public virtual TicketType TicketType { get; set; }

        [ForeignKey("TicketType")]
        public int? TypeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public TicketStatus TicketStatus { get; set; }

        [ForeignKey("TicketStatus")]
        public int? StatusId { get; set; }

        public User User { get; set; }

        [ForeignKey("User")]
        public int Assignee { get; set; }

        public TicketPriority TicketPriority { get; set; }

        [ForeignKey("TicketPriority")]
        public int? PriorityId { get; set; }

        public DateTime CreateDate { get; set; }

        public DateTime? DueDate { get; set; }
    }
}