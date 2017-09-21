CREATE TABLE [dbo].[Statuses] (
    [Id]     INT            IDENTITY (1, 1) NOT NULL,
    [Status] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Statuses] PRIMARY KEY CLUSTERED ([Id] ASC)
);


