/*
# Create contact messages inbox

1. New Tables
- `contact_messages` stores messages submitted through the public IGNITE 2026 contact form.
- `id` is the generated primary key.
- `name`, `email`, `message`, and `created_at` capture the sender and inquiry.

2. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may submit a message.
- Submitted messages are not readable, editable, or deletable through the public client.

3. Important Notes
- This is a single-event site with no sign-in flow, so submissions are accepted from the anonymous role.
- The public form only needs INSERT access; the remaining policies explicitly deny client-side access.
*/

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_messages;
CREATE POLICY "Public can submit contact messages"
  ON public.contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 254 AND char_length(message) BETWEEN 1 AND 5000);

DROP POLICY IF EXISTS "Contact messages are not publicly readable" ON public.contact_messages;
CREATE POLICY "Contact messages are not publicly readable"
  ON public.contact_messages FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Contact messages are not publicly editable" ON public.contact_messages;
CREATE POLICY "Contact messages are not publicly editable"
  ON public.contact_messages FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Contact messages are not publicly deletable" ON public.contact_messages;
CREATE POLICY "Contact messages are not publicly deletable"
  ON public.contact_messages FOR DELETE
  TO anon, authenticated
  USING (false);