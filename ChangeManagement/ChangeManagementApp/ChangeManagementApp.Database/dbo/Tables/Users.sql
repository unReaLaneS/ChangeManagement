CREATE TABLE [dbo].[Users] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [Password]   NVARCHAR (50) NOT NULL,
    [UserTypeId] INT           NOT NULL,
    [Username]   NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Users_UserTypes_UserTypeId] FOREIGN KEY ([UserTypeId]) REFERENCES [dbo].[UserTypes] ([Id]) ON DELETE CASCADE
);






GO
CREATE NONCLUSTERED INDEX [IX_Users_UserTypeId]
    ON [dbo].[Users]([UserTypeId] ASC);

