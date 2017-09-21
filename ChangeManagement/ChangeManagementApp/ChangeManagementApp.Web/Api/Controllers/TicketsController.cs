using ChangeManagementApp.Services.Interfaces;
using ChangeManagementApp.Services.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChangeManagementApp.Web.Api.Controllers
{
    [Route("api/[controller]")]
    public class TicketsController : Controller
    {
        private ITicketService _ticketService;

        public TicketsController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<TicketModel> Get()
        {
            return _ticketService.GetAllTickets();
        }

        
        [HttpPost("byrole")]
        public IEnumerable<TicketModel> GetTicketsByRoleAndUsername([FromBody]UserModel userModel)
        {
            return _ticketService.GetAllTicketsByRole(userModel);
        }

        [HttpGet("change")]
        public IEnumerable<TicketModel> GetChangeTickets()
        {
            return _ticketService.GetChangeTickets();
        }

        [HttpGet("incident")]
        public IEnumerable<TicketModel> GetIncidentTickets()
        {
            return _ticketService.GetIncidentTickets();
        }

        [HttpGet("types")]        
        public IEnumerable<TicketTypeModel> GetTypes()
        {
            return _ticketService.GetTicketTypes();
        }

        [HttpGet("statuses")]
        public IEnumerable<TicketStatusModel> GetStatuses()
        {
            return _ticketService.GetTicketStatuses();
        }

        [HttpGet("priorities")]
        public IEnumerable<TicketPriorityModel> GetPriorities()
        {
            return _ticketService.GetTicketPriorities();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public TicketModel Get(int id)
        {
            return _ticketService.GetTicketById(id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]TicketModel ticket)
        {
            _ticketService.Create(ticket);
            return Created("tickets", ticket);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]TicketModel ticket)
        {
            Debug.WriteLine("UPDATE TICKET u TicketsController.cs:" + ticket.Name + ticket.Location + ticket.Id);

            ticket.Id = id;
            _ticketService.UpdateTicket(ticket);
            
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}