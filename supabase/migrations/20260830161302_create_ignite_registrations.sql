/*
# Create IGNITE registration inbox

1. New Tables
- `ignite_registrations` stores participant registration requests.
- `id` is the generated primary key.
- `name`, `email`, `phone`, `college`, and `team_name` capture the submitted registration details.
- `created_at` records when the request was received.

2. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may submit a registration.
- Submitted registrations are not readable, editable, or deletable through the public client.

3. Important Notes
- This is a single-event site with no sign-in flow, so submissions are accepted from the anonymous role.
- The public registration form only needs INSERT access; the remaining policies explicitly deny client-side access.
*/

CREATE TABLE IF NOT EXISTS public.ignite_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  college text NOT NULL,
  team_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ignite_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit registrations" ON public.ignite_registrations;
CREATE POLICY "Public can submit registrations"
  ON public.ignite_registrations FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 254 AND char_length(phone) BETWEEN 7 AND 30 AND char_length(college) BETWEEN 1 AND 200 AND char_length(team_name) BETWEEN 1 AND 120);

DROP POLICY IF EXISTS "Registrations are not publicly readable" ON public.ignite_registrations;
CREATE POLICY "Registrations are not publicly readable"
  ON public.ignite_registrations FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Registrations are not publicly editable" ON public.ignite_registrations;
CREATE POLICY "Registrations are not publicly editable"
  ON public.ignite_registrations FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Registrations are not publicly deletable" ON public.ignite_registrations;
CREATE POLICY "Registrations are not publicly deletable"
  ON public.ignite_registrations FOR DELETE
  TO anon, authenticated
  USING (false);