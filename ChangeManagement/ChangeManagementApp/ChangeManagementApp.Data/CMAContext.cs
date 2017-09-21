using ChangeManagementApp.BusinessEntities.Entities;
using Microsoft.EntityFrameworkCore;

namespace ChangeManagementApp.Data
{
    public class CMAContext : DbContext
    {
        public CMAContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<TicketPriority> Priorities { get; set; }
        public DbSet<TicketStatus> Statuses { get; set; }
        public DbSet<TicketType> Types { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
    }
}