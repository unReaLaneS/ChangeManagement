CREATE TABLE [dbo].[Tickets] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Assignee]    INT            NOT NULL,
    [CreateDate]  DATETIME2 (7)  NOT NULL,
    [Description] NVARCHAR (MAX) NULL,
    [DueDate]     DATETIME2 (7)  NULL,
    [Location]    NVARCHAR (MAX) NULL,
    [Name]        NVARCHAR (MAX) NULL,
    [PriorityId]  INT            NULL,
    [StatusId]    INT            NULL,
    [TypeId]      INT            NULL,
    CONSTRAINT [PK_Tickets] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Tickets_Priorities_PriorityId] FOREIGN KEY ([PriorityId]) REFERENCES [dbo].[Priorities] ([Id]),
    CONSTRAINT [FK_Tickets_Statuses_StatusId] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[Statuses] ([Id]),
    CONSTRAINT [FK_Tickets_Types_TypeId] FOREIGN KEY ([TypeId]) REFERENCES [dbo].[Types] ([Id]),
    CONSTRAINT [FK_Tickets_Users_Assignee] FOREIGN KEY ([Assignee]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE
);






GO



GO



GO
CREATE NONCLUSTERED INDEX [IX_Tickets_TypeId]
    ON [dbo].[Tickets]([TypeId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_Tickets_StatusId]
    ON [dbo].[Tickets]([StatusId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_Tickets_PriorityId]
    ON [dbo].[Tickets]([PriorityId] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_Tickets_Assignee]
    ON [dbo].[Tickets]([Assignee] ASC);

