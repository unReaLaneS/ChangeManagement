using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeManagementApp.Data.Repositories
{
    public class TicketRepository : ITicketRepository
    {
        private CMAContext _context;

        public TicketRepository(CMAContext context)
        {
            _context = context;
        }

        public void Create(Ticket ticket)
        {
            ticket.TicketType = _context.Types.FirstOrDefault(t => t.Type == ticket.TicketType.Type);
            ticket.TicketStatus = _context.Statuses.FirstOrDefault(s => s.Status == ticket.TicketStatus.Status);
            ticket.TicketPriority = _context.Priorities.FirstOrDefault(p => p.Priority == ticket.TicketPriority.Priority);
            ticket.User = _context.Users.Where(u => u.Username.Equals(ticket.User.Username)).First();
            ticket.CreateDate = DateTime.Now;
            _context.Tickets.Add(ticket);
            _context.SaveChanges();
        }

        public void Delete(Ticket ticket)
        {
            _context.Tickets.Remove(ticket);
        }

        public IEnumerable<Ticket> GetAllTickets()
        {
            return _context.Tickets
                .Include(t => t.TicketStatus)
                .Include(t => t.TicketPriority)
                .Include(t => t.TicketType)
                .Include(u => u.User)
                .AsEnumerable();
        }

        public IEnumerable<Ticket> GetAllTickets(string username, string role)
        {
            if (role == "ChangeManager")
            {
                return _context.Tickets
                   .Include(t => t.TicketStatus)
                   .Include(t => t.TicketPriority)
                   .Include(t => t.TicketType)
                   .Include(u => u.User).Where(t => t.TicketType.Type.Equals("Change") && t.User.Username == username)
                  .AsEnumerable();
            }
            else if (role == "IncidentManager")
            {
                return _context.Tickets
                   .Include(t => t.TicketStatus)
                   .Include(t => t.TicketPriority)
                   .Include(t => t.TicketType)
                   .Include(u => u.User).Where(t => t.TicketType.Type.Equals("Incident") && t.User.Username == username)
                  .AsEnumerable();
            }
            else if (role == "User")
            {
                return _context.Tickets
                        .Include(t => t.TicketStatus)
                        .Include(t => t.TicketPriority)
                        .Include(t => t.TicketType)
                        .Include(u => u.User).Where(t => t.User.Username == username)
                        .AsEnumerable();
            }

            return GetAllTickets();
        }

        public IEnumerable<Ticket> GetChangeTickets()
        {
            return _context.Tickets
                .Include(t => t.TicketStatus)
                .Include(t => t.TicketPriority)
                .Include(t => t.TicketType)
                .Include(u => u.User).Where(t => t.TicketType.Type.Equals("Change"))
                .AsEnumerable();
        }

        public IEnumerable<Ticket> GetIncidentTickets()
        {
            return _context.Tickets
                .Include(t => t.TicketStatus)
                .Include(t => t.TicketPriority)
                .Include(t => t.TicketType)
                .Include(u => u.User).Where(t => t.TicketType.Type.Equals("Incident"))
                .AsEnumerable();
        }

        public Ticket GetTicketById(int id)
        {
            return _context.Tickets
                .Include(t => t.TicketStatus)
                .Include(t => t.TicketPriority)
                .Include(t => t.TicketType)
                .Include(u => u.User)
                .FirstOrDefault(t => t.Id == id);
        }

        public IEnumerable<TicketStatus> GetTicketStatuses()
        {
            return _context.Statuses.AsEnumerable();
        }

        public IEnumerable<TicketType> GetTicketTypes()
        {
            return _context.Types.AsEnumerable();
        }

        public IEnumerable<TicketPriority> GetTicketPriorities()
        {
            return _context.Priorities.AsEnumerable();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public void Update(Ticket ticket)
        {
            var ticketInDb = GetTicketById(ticket.Id);
            
            ticketInDb.TicketType = _context.Types.FirstOrDefault(t => t.Type == ticket.TicketType.Type);
            ticketInDb.TicketStatus = _context.Statuses.FirstOrDefault(s => s.Status == ticket.TicketStatus.Status);
            ticketInDb.TicketPriority = _context.Priorities.FirstOrDefault(p => p.Priority == ticket.TicketPriority.Priority);
            ticketInDb.User = _context.Users.Where(u => u.Username.Equals(ticket.User.Username)).First();
            ticketInDb.CreateDate = DateTime.Now;
            ticketInDb.Name = ticket.Name;
            ticketInDb.Description = ticket.Description;
            ticketInDb.Location = ticket.Location;
            _context.Tickets.Update(ticketInDb);
            _context.SaveChanges();

        }
    }
}