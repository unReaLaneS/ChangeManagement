CREATE TABLE [dbo].[Types] (
    [Id]   INT            IDENTITY (1, 1) NOT NULL,
    [Type] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Types] PRIMARY KEY CLUSTERED ([Id] ASC)
);


