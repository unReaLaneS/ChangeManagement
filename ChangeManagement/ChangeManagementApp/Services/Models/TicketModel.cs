using System;

namespace ChangeManagementApp.Services.Models
{
    public class TicketModel
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string Location { get; set; }
        public string Assignee { get; set; }
        public string Priority { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}