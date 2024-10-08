DELETE FROM directus_flows; DELETE FROM directus_operations;
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: directus_flows; Type: TABLE DATA; Schema: public; Owner: directus_user
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.directus_flows DISABLE TRIGGER ALL;

INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('fe3245a8-f086-494d-b170-2cadb797f953', 'Collect dinner meals', 'lunch_dining', NULL, NULL, 'active', 'manual', 'all', '{"collections":["events"]}', 'ee098063-356d-4418-97d5-92283eef12af', '2024-10-08 09:13:55.129+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;


ALTER TABLE public.directus_flows ENABLE TRIGGER ALL;

--
-- Data for Name: directus_operations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

ALTER TABLE public.directus_operations DISABLE TRIGGER ALL;

INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('a3ff291a-582c-4cef-9150-b31d7e2155f2', 'event', 'event', 'item-read', 37, 1, '{"query":{"filter":{"id":{"_eq":"{{$trigger.body.keys[0]}}"}}},"collection":"events"}', 'ea249ff7-5636-4b6b-ba34-e74459e8f95f', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:56:36.154+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('ee098063-356d-4418-97d5-92283eef12af', 'registrations', 'registrations', 'item-read', 19, 1, '{"query":{"filter":{"event":{"_eq":"{{$trigger.body.keys[0]}}"}}},"collection":"registrations","permissions":"$full"}', 'a3ff291a-582c-4cef-9150-b31d7e2155f2', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 09:27:12.028+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('9bf57bcd-85d4-43a9-9485-260937da873b', 'Update Data', 'item_update_x5sxb_oamey', 'item-update', 73, 1, '{"collection":"events","key":[],"query":{"filter":{"id":{"_eq":"{{$trigger.body.keys[0]}}"}}},"payload":{"meals":"{{$last}}"},"permissions":"$full"}', NULL, NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:57:14.735+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('ea249ff7-5636-4b6b-ba34-e74459e8f95f', 'Run Script', 'exec_6jsie_rtjwm', 'exec', 55, 1, '{"code":"module.exports = async function(data) {\n    reset = data.event[0].meals.reduce((acc, v) => [...acc, { ...v, count: 0 }], []);\n    \n    return data.registrations.reduce((acc, v) => {\n      acc[v.meal].count += 1;\n      return acc;\n    }, reset);\n}"}', '9bf57bcd-85d4-43a9-9485-260937da873b', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:56:36.15+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;


ALTER TABLE public.directus_operations ENABLE TRIGGER ALL;

--
-- PostgreSQL database dump complete
--

