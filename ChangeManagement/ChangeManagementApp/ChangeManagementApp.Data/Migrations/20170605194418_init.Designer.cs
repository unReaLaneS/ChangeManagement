using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ChangeManagementApp.Data;

namespace ChangeManagementApp.Data.Migrations
{
    [DbContext(typeof(CMAContext))]
    [Migration("20170605194418_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.Ticket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Assignee");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Description");

                    b.Property<DateTime?>("DueDate");

                    b.Property<string>("Location");

                    b.Property<string>("Name");

                    b.Property<int?>("PriorityId");

                    b.Property<int?>("StatusId");

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("Assignee");

                    b.HasIndex("PriorityId");

                    b.HasIndex("StatusId");

                    b.HasIndex("TypeId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.TicketPriority", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Priority");

                    b.HasKey("Id");

                    b.ToTable("Priorities");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.TicketStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Status");

                    b.HasKey("Id");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.TicketType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("Types");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("UserTypeId");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("UserTypeId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.UserType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("UserTypes");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.Ticket", b =>
                {
                    b.HasOne("ChangeManagementApp.BusinessEntities.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("Assignee")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ChangeManagementApp.BusinessEntities.Entities.TicketPriority", "TicketPriority")
                        .WithMany("Tickets")
                        .HasForeignKey("PriorityId");

                    b.HasOne("ChangeManagementApp.BusinessEntities.Entities.TicketStatus", "TicketStatus")
                        .WithMany("Tickets")
                        .HasForeignKey("StatusId");

                    b.HasOne("ChangeManagementApp.BusinessEntities.Entities.TicketType", "TicketType")
                        .WithMany("Tickets")
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("ChangeManagementApp.BusinessEntities.Entities.User", b =>
                {
                    b.HasOne("ChangeManagementApp.BusinessEntities.Entities.UserType", "UserType")
                        .WithMany("Users")
                        .HasForeignKey("UserTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
