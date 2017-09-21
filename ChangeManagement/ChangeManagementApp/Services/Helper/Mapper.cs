using ChangeManagementApp.BusinessEntities.Entities;
using ChangeManagementApp.Services.Models;
using System.Reflection;
using ChangeManagementApp.Data.Interfaces;
using System.Collections.Generic;

namespace ChangeManagementApp.Services.Helper
{
    /// <summary>
    /// Maps properties of one class to another, use it to map one class to another.
    /// </summary>
    public class Mapper
    {

        public static T Map<T>(object obj1) where T : new()
        {
            var obj2 = new T();
            foreach (var property in obj1.GetType().GetProperties())
            {
                if (obj2.GetType().GetProperty(property.Name) != null)
                {
                    obj2.GetType().GetProperty(property.Name).SetValue(obj2, property.GetValue(obj1, null));
                }
            }

            return obj2;
        }

        public static User MapModelToUser(UserModel user)
        {
            return new User
            {
                Id = user.Id,
                Username = user.Username,
                Password = user.Password,
                UserType = new UserType
                {
                    Type = user.Role
                }
            };
        }

        public static UserModel MapUserToModel(User user)
        {
            if (user == null)
            {
                return new UserModel { Role = "Invalid" };
            }
            return new UserModel
            {
                Id = user.Id,
                Username = user.Username,
                Password = user.Password,
                Role = user.UserType.Type
            };
        }

        public static UserTypeModel MapToUserTypeModel(UserType role)
        {
            return new UserTypeModel
            {
                Id = role.Id,
                Type = role.Type
            };
        }

        public static Ticket Map(TicketModel model)
        {

            return new Ticket
            {
                Id = model.Id,
                Name = model.Name,
                TicketType = new TicketType { Type = model.Type },
                Description = model.Description,
                User = model.Assignee != null ? new User { Username = model.Assignee } : new User { Username = "default" },
                TicketStatus = model.Status == null ? new TicketStatus { Status = "New" } : new TicketStatus { Status = model.Status },
                TicketPriority = model.Priority == null ?  new TicketPriority { Priority = "Low" } : new TicketPriority { Priority = model.Priority },
                Location = model.Location,
                CreateDate = model.CreateDate,
                DueDate = model.DueDate


            };
        }

        public static TicketModel MapToModel(Ticket ticket)
        {
            return new TicketModel
            {
                Id = ticket.Id,
                Name = ticket.Name,
                Type = ticket.TicketType?.Type,
                Status = ticket.TicketStatus?.Status,
                Priority = ticket.TicketPriority?.Priority,
                Assignee = ticket.User.Username,
                Description = ticket.Description,
                CreateDate = ticket.CreateDate,
                Location = ticket.Location
            };
        }

        public static TicketTypeModel MapToTicketTypeModel(TicketType type)
        {
            return new TicketTypeModel
            {
                Id = type.Id,
                Type = type.Type
            };
        }

        public static TicketStatusModel MapToTicketStatusModel(TicketStatus status)
        {
            return new TicketStatusModel
            {
                Id = status.Id,
                Status = status.Status
            };
        }

        public static TicketPriorityModel MapToTicketPriorityModel(TicketPriority type)
        {
            return new TicketPriorityModel
            {
                Id = type.Id,
                Priority = type.Priority
            };
        }
    }
}