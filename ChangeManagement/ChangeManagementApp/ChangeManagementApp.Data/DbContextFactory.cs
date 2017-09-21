using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace ChangeManagementApp.Data
{
    internal class DbContextFactory : IDbContextFactory<CMAContext>
    {
        public CMAContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<CMAContext>();
            builder.UseSqlServer(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=ChangeManagementApp.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            return new CMAContext(builder.Options);
        }
    }
}