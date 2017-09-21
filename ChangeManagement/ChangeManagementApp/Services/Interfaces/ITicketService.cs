using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Services.Models;
using System.Collections.Generic;

namespace ChangeManagementApp.Services.Interfaces
{
    public interface ITicketService
    {
        void Create(TicketModel ticket);

        void UpdateTicket(TicketModel ticket);

        TicketModel GetTicketById(int id);

        void Delete(TicketModel ticket);

        IEnumerable<TicketModel> GetAllTickets();

        IEnumerable<TicketTypeModel> GetTicketTypes();
        IEnumerable<TicketStatusModel> GetTicketStatuses();
        IEnumerable<TicketModel> GetChangeTickets();
        IEnumerable<TicketModel> GetIncidentTickets();
        IEnumerable<TicketModel> GetAllTicketsByRole(UserModel userModel);
        IEnumerable<TicketPriorityModel> GetTicketPriorities();

    }
}