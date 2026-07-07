CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"honeypot" text DEFAULT '',
	"created_at" timestamp with time zone DEFAULT now()
);
