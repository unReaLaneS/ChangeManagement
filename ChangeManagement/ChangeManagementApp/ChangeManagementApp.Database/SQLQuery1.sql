use [ChangeManagementApp.Database]

insert into UserTypes (Type) values ('User'),('Admin'),('ChangeManager'),('IncidentManager'),('ChangeAdvisor'),('IncidentAdvisor'),('NotAssigned');

insert into Users (Username,Password,UserTypeId) values ('kenan','12345','1'),('anes','12345','2'), ('notassigned', '12345', '7')

insert into Statuses (Status) values ('New'),('Assigned'),('InProgress'),('Resolved'),('Rejected')

insert into Types (Type) values ('Change'),('Incident')

insert into Priorities (Priority) values ('Low'),('Medium'),('High'), ('None')

insert into Tickets (Name,Description,TypeId,StatusId,Assignee,CreateDate,Location,PriorityId) values
('Kenan','This is some description',1,1,1,'06/05/2017 13:13:13','Sarajevo',1),
('Kenan','This is some description',2,1,1,'06/05/2017 13:13:13','Sarajevo',1),
('Kenan','This is some description',2,1,1,'06/05/2017 13:13:13','Sarajevo',1),
('Kenan','This is some description',1,1,1,'06/05/2017 13:13:13','Sarajevo',1),
('Kenan','This is some description',1,1,1,'06/05/2017 13:13:13','Sarajevo',1)