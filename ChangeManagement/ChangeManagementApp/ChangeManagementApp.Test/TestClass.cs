using ChangeManagementApp.Services.Helper;
using ChangeManagementApp.Services.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ChangeManagementApp.Test
{
    [TestClass]
    public class TestClass
    {
        [TestMethod]
        public void MapperTest()
        {
            var ticketModel = new TicketModel
            {
                Type = "Change",
                Name = "Name of the ticket",
                Description = "Ticket description",
                Status = "New",
                Assignee = "Ivan Grozni",
                Priority = "Medium"
            };

            var ticket = Mapper.Map(ticketModel);
        }
    }
}