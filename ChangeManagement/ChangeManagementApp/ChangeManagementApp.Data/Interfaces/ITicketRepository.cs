using ChangeManagementApp.BusinessEntities.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChangeManagementApp.Data.Interfaces
{
    public interface ITicketRepository
    {
        void Create(Ticket ticket);

        void Delete(Ticket ticket);

        Task<bool> SaveChangesAsync();

        void Update(Ticket ticket);

        Ticket GetTicketById(int id);

        IEnumerable<Ticket> GetAllTickets();

        IEnumerable<TicketType> GetTicketTypes();
        IEnumerable<TicketStatus> GetTicketStatuses();
        IEnumerable<Ticket> GetChangeTickets();

        IEnumerable<Ticket> GetIncidentTickets();

        IEnumerable<TicketPriority> GetTicketPriorities();
        IEnumerable<Ticket> GetAllTickets(string username, string role);
    }
}