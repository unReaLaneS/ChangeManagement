using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Data.Interfaces;
using ChangeManagementApp.Services.Helper;
using ChangeManagementApp.Services.Interfaces;
using ChangeManagementApp.Services.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace ChangeManagementApp.Services
{
    public class TicketService : ITicketService
    {
        private ITicketRepository _ticketRepository;

        public TicketService(ITicketRepository ticketRepository)
        {
            _ticketRepository = ticketRepository;
        }

        public void Create(TicketModel ticketModel)
        {
            try
            {
                var ticket = Mapper.Map(ticketModel);
               
                _ticketRepository.Create(ticket);
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void UpdateTicket(TicketModel ticketModel)
        {
            Debug.WriteLine("UPDATE TICKET u TicketService.cs:" + ticketModel.Name + ticketModel.Location + ticketModel.Id);

            var ticket = Mapper.Map(ticketModel);
            _ticketRepository.Update(ticket);
        }

        public TicketModel GetTicketById(int id)
        {
            var ticket = _ticketRepository.GetTicketById(id);
            return Mapper.MapToModel(ticket);
        }

        public void Delete(TicketModel ticketModel)
        {
            var ticket = Mapper.Map<Ticket>(ticketModel);
            _ticketRepository.Delete(ticket);
        }

        public IEnumerable<TicketModel> GetAllTickets()
        {
            var tickets = _ticketRepository.GetAllTickets();
            var ticketModels = new List<TicketModel>();
            foreach (var ticket in tickets)
            {
                var ticketModel = Mapper.MapToModel(ticket);
                ticketModels.Add(ticketModel);
            }

            return ticketModels;
        }

        public IEnumerable<TicketTypeModel> GetTicketTypes()
        {
            var types = _ticketRepository.GetTicketTypes();
            var typesModels = new List<TicketTypeModel>();
            foreach (var type in types)
            {
                var typeModel = Mapper.MapToTicketTypeModel(type);
                typesModels.Add(typeModel);
            }

            return typesModels;
        }

        public IEnumerable<TicketStatusModel> GetTicketStatuses()
        {
            var statuses = _ticketRepository.GetTicketStatuses();
            var statusModels = new List<TicketStatusModel>();
            foreach (var status in statuses)
            {
                var statusType = Mapper.MapToTicketStatusModel(status);

                statusModels.Add(statusType);
            }

            return statusModels;
        }

        public IEnumerable<TicketModel> GetChangeTickets()
        {
            var tickets = _ticketRepository.GetChangeTickets();
            var ticketModels = new List<TicketModel>();
            foreach (var ticket in tickets)
            {
                var ticketModel = Mapper.MapToModel(ticket);
                ticketModels.Add(ticketModel);
            }

            return ticketModels;
        }

        public IEnumerable<TicketModel> GetIncidentTickets()
        {
            var tickets = _ticketRepository.GetIncidentTickets();
            var ticketModels = new List<TicketModel>();
            foreach (var ticket in tickets)
            {
                var ticketModel = Mapper.MapToModel(ticket);
                ticketModels.Add(ticketModel);
            }

            return ticketModels;
        }

        public IEnumerable<TicketModel> GetAllTicketsByRole(UserModel userModel)
        {
            var tickets = _ticketRepository.GetAllTickets(userModel.Username, userModel.Role);
            var ticketModels = new List<TicketModel>();
            foreach (var ticket in tickets)
            {
                var ticketModel = Mapper.MapToModel(ticket);
                ticketModels.Add(ticketModel);
            }

            return ticketModels;
        }

        public IEnumerable<TicketPriorityModel> GetTicketPriorities()
        {
            var statuses = _ticketRepository.GetTicketPriorities();
            var statusModels = new List<TicketPriorityModel>();
            foreach (var status in statuses)
            {
                var statusType = Mapper.MapToTicketPriorityModel(status);

                statusModels.Add(statusType);
            }

            return statusModels;
        }

    }
}