DELETE FROM directus_flows; DELETE FROM directus_operations;
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.7 (Debian 16.7-1.pgdg120+1)
-- Dumped by pg_dump version 16.7 (Debian 16.7-1.pgdg120+1)

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

INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('e8e1ae99-744b-4044-a0dd-e213374c1363', 'Confirm registration', 'outgoing_mail', NULL, NULL, 'active', 'event', 'all', '{"type":"action","scope":["items.create"],"collections":["registrations"]}', '414a0e49-23f9-4a48-9a4e-38c9df97f3ca', '2024-10-26 07:32:59.27+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('93c8399e-f2b9-4808-9904-e01dac447ef8', 'Count registrations', 'exposure_plus_1', NULL, NULL, 'active', 'event', 'all', '{"type":"action","scope":["items.update","items.create"],"collections":["registrations"]}', '9bd89ab8-8fa2-4131-9955-a9098f1347bb', '2024-10-15 09:21:59.395+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('fe3245a8-f086-494d-b170-2cadb797f953', 'Collect dinner meals', 'lunch_dining', NULL, NULL, 'active', 'manual', 'all', '{"collections":["events"]}', 'ee098063-356d-4418-97d5-92283eef12af', '2024-10-08 09:13:55.129+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('f74f1cff-ee5a-44b1-b2d4-405492a48435', 'Send single registration mail', 'outgoing_mail', NULL, NULL, 'active', 'operation', 'all', '{"return":"$last"}', '08240661-64b3-472a-b629-0fd777a53de6', '2024-10-08 16:44:26.58+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('6cf86bff-9bfb-4707-9166-411d7b60f564', 'Update registration count', 'bolt', NULL, NULL, 'active', 'operation', 'all', '{}', 'fde56e88-4224-40ce-bbdb-8799cea2fb3c', '2024-10-15 11:20:21.541+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('acc1a4fa-e03d-447e-8a54-ca5afbdd9c0b', 'Send registration mails', 'outgoing_mail', NULL, NULL, 'active', 'manual', 'all', '{"collections":["events"]}', '5c6f3d47-dd3d-41dd-b240-2a68f06d1592', '2024-10-15 08:43:09.254+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('260b7a9d-fe71-4bc6-b54b-0a7ef5c9b8ee', 'Close full events', 'tab_close', NULL, NULL, 'active', 'operation', 'all', '{}', 'b6527bbb-9721-4b18-bea0-c41612d1b2e9', '2024-10-15 09:12:55.349+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_flows (id, name, icon, color, description, status, trigger, accountability, options, operation, date_created, user_created) VALUES ('d2ba770b-1958-4b19-bcd3-82193aac3a3d', '[ICBD] Update activity status', NULL, NULL, 'Updates activities timeslots to indicate whether they are full', 'active', 'event', 'all', '{"type":"action","scope":["items.update"],"collections":["icbd_activities_registrations"]}', '3cd97be2-277f-42fb-93c6-50f20d8d24e5', '2025-02-15 10:35:32.205+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;


ALTER TABLE public.directus_flows ENABLE TRIGGER ALL;

--
-- Data for Name: directus_operations; Type: TABLE DATA; Schema: public; Owner: directus_user
--

ALTER TABLE public.directus_operations DISABLE TRIGGER ALL;

INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('ee098063-356d-4418-97d5-92283eef12af', 'registrations', 'registrations', 'item-read', 19, 1, '{"query":{"filter":{"event":{"_eq":"{{$trigger.body.keys[0]}}"}}},"collection":"registrations","permissions":"$full"}', 'a3ff291a-582c-4cef-9150-b31d7e2155f2', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 09:27:12.028+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('9bf57bcd-85d4-43a9-9485-260937da873b', 'Update Data', 'item_update_x5sxb_oamey', 'item-update', 73, 1, '{"collection":"events","key":[],"query":{"filter":{"id":{"_eq":"{{$trigger.body.keys[0]}}"}}},"payload":{"meals":"{{$last}}"},"permissions":"$full"}', NULL, NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:57:14.735+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('198b832c-daee-404f-9a83-ebfeaca40e65', 'Fetch event', 'event', 'item-read', 37, 1, '{"key":["{{$trigger.event}}"],"collection":"events"}', 'acbb3de3-a94f-4264-b1f9-9ce1d46e7fb2', NULL, '6cf86bff-9bfb-4707-9166-411d7b60f564', '2024-10-15 12:10:44.439+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('ea249ff7-5636-4b6b-ba34-e74459e8f95f', 'Run Script', 'exec_6jsie_rtjwm', 'exec', 55, 1, '{"code":"module.exports = async function(data) {\n    reset = data.event[0].meals.reduce((acc, v) => [...acc, { ...v, count: 0 }], []);\n    \n    return data.registrations.reduce((acc, v) => {\n      acc[v.meal].count += 1;\n      return acc;\n    }, reset);\n}"}', '9bf57bcd-85d4-43a9-9485-260937da873b', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:56:36.15+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('acbb3de3-a94f-4264-b1f9-9ce1d46e7fb2', 'Count registrations', 'count_vjtqe', 'exec', 55, 1, '{"code":"module.exports = async function(data) {\n    let count = 0;\n    count += data.registrations.length;\n    \n    for(let i = 0; i < data.registrations.length; i += 1) {\n        if(data.registrations[i].plusOnes) {\n            count += data.registrations[i].plusOnes;\n        }\n    }\n    \n    return {\n        \"registration_count\": count,\n        \"opened\": data.event.opened && !(typeof data.event.max_registrations === \"number\" && data.event.max_registrations <= count),\n    };\n}"}', 'bae6bfa7-45cb-4322-8ceb-42844013c27d', NULL, '6cf86bff-9bfb-4707-9166-411d7b60f564', '2024-10-15 12:10:44.425+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('0ba61e3e-139b-4eba-a44b-5fc4caaf245a', 'Trigger Flow', 'trigger_o9drl', 'trigger', 55, 1, '{"flow":"6cf86bff-9bfb-4707-9166-411d7b60f564","payload":"{{$last}}"}', NULL, NULL, '93c8399e-f2b9-4808-9904-e01dac447ef8', '2024-10-15 11:21:21.223+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('52b00730-0cf6-49c0-ba89-dde1103fb0fe', 'mail', 'mail', 'exec', 37, 1, '{"code":"module.exports = async function(data) {\n    let qr_url = `https://clic.epfl.ch/clicketing/qrcode/${data.$trigger.id}`\n    let dict = {\n    \t\"%event\": data.event[0],\n        \"%first_name\": data.$trigger.first_name,\n        \"%family_name\": data.$trigger.family_name,\n        \"%qrcode\": `<img src=\"${qr_url}\">`,\n        \"%qrurl\": qr_url\n    }\n    \n    let mail = data.event[0].mailTemplate\n    console.log(mail)\n    let entries = Object.entries(dict)\n    \n    for(let i = 0; i < entries.length; i += 1){\n        mail = mail.replaceAll(entries[i][0], entries[i][1])\n    }\n    \n    return mail\n}"}', '5de0acd9-25e6-4c59-aa88-1dbe847aa88c', NULL, 'f74f1cff-ee5a-44b1-b2d4-405492a48435', '2024-10-09 11:34:58.282+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('8dac1c3d-1e65-4739-80c2-1a804674873a', 'Fetch registration', 'fetch_registration', 'item-read', 37, 1, '{"query":null,"collection":"registrations","key":["{{$trigger.keys[0]}}"]}', '0ba61e3e-139b-4eba-a44b-5fc4caaf245a', NULL, '93c8399e-f2b9-4808-9904-e01dac447ef8', '2024-10-15 10:41:19.996+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('08240661-64b3-472a-b629-0fd777a53de6', 'event', 'event', 'item-read', 19, 1, '{"query":{"filter":{"id":{"_eq":"{{$trigger.event}}"}}},"collection":"events","permissions":"$full"}', '52b00730-0cf6-49c0-ba89-dde1103fb0fe', NULL, 'f74f1cff-ee5a-44b1-b2d4-405492a48435', '2024-10-09 11:34:58.297+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('f4e066db-d355-48ba-adc2-88d32cf667f7', 'send', 'send', 'trigger', 46, 1, '{"flow":"f74f1cff-ee5a-44b1-b2d4-405492a48435","payload":"{{$last}}"}', NULL, NULL, 'acc1a4fa-e03d-447e-8a54-ca5afbdd9c0b', '2024-10-15 08:50:01.922+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('5c6f3d47-dd3d-41dd-b240-2a68f06d1592', 'registrations', 'registrations', 'item-read', 19, 1, '{"collection":"registrations","query":{"filter":{"event":{"_eq":"{{$trigger.body.keys[0]}}"}}}}', 'f4e066db-d355-48ba-adc2-88d32cf667f7', NULL, 'acc1a4fa-e03d-447e-8a54-ca5afbdd9c0b', '2024-10-15 08:45:13.319+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('9099bb22-5cda-4463-ab87-88ccbaf7c418', 'Trigger Flow', 'trigger_o9drl_bjfdv', 'trigger', 37, 16, '{"flow":"6cf86bff-9bfb-4707-9166-411d7b60f564","payload":"{{$trigger.payload}}"}', NULL, NULL, '93c8399e-f2b9-4808-9904-e01dac447ef8', '2024-10-15 12:08:02.08+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('5de0acd9-25e6-4c59-aa88-1dbe847aa88c', 'Send Email', 'mail_xwvcu_axgzi', 'mail', 55, 1, '{"to":["{{$trigger.email}}"],"subject":"Your registration to {{event[0].name}}","type":"wysiwyg","body":"<p>{{mail}}</p>"}', NULL, NULL, 'f74f1cff-ee5a-44b1-b2d4-405492a48435', '2024-10-09 11:34:58.277+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('bae6bfa7-45cb-4322-8ceb-42844013c27d', 'Update Data', 'item_update_rz4iw_lnanl', 'item-update', 73, 1, '{"query":null,"collection":"events","key":["{{$trigger.event}}"],"permissions":"$full","payload":"{{$last}}"}', NULL, NULL, '6cf86bff-9bfb-4707-9166-411d7b60f564', '2024-10-15 12:10:44.418+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('978dd5cd-0e25-43df-906b-f4761db7044e', 'close', 'close', 'item-update', 55, 1, '{"collection":"events","key":["{{$event.id}}"],"payload":{}}', NULL, NULL, '260b7a9d-fe71-4bc6-b54b-0a7ef5c9b8ee', '2024-10-15 09:16:22.874+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('a3ff291a-582c-4cef-9150-b31d7e2155f2', 'event', 'event', 'item-read', 37, 1, '{"query":{"filter":{"id":{"_eq":"{{$trigger.body.keys[0]}}"}}},"collection":"events"}', 'ea249ff7-5636-4b6b-ba34-e74459e8f95f', NULL, 'fe3245a8-f086-494d-b170-2cadb797f953', '2024-10-08 13:56:36.154+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('11ed631c-b3ad-41d2-a541-75e574fb4e4b', 'is_full', 'is_full', 'condition', 37, 1, '{"filter":{"event":{"max_registrations":{"_null":false,"_gte":"{{$event.registration_count}}"}}}}', '978dd5cd-0e25-43df-906b-f4761db7044e', NULL, '260b7a9d-fe71-4bc6-b54b-0a7ef5c9b8ee', '2024-10-15 09:16:22.883+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('b6527bbb-9721-4b18-bea0-c41612d1b2e9', 'event', 'event', 'item-read', 19, 1, '{"collection":"events","query":{"filter":{"event":{"_eq":"{{$trigger.id}}"}}}}', '11ed631c-b3ad-41d2-a541-75e574fb4e4b', NULL, '260b7a9d-fe71-4bc6-b54b-0a7ef5c9b8ee', '2024-10-15 09:16:22.898+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('fde56e88-4224-40ce-bbdb-8799cea2fb3c', 'Fetch registrations', 'registrations', 'item-read', 19, 1, '{"collection":"registrations","query":{"filter":{"event":{"_eq":"{{$trigger.event}}"}}}}', '198b832c-daee-404f-9a83-ebfeaca40e65', NULL, '6cf86bff-9bfb-4707-9166-411d7b60f564', '2024-10-15 11:25:07.599+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('9bd89ab8-8fa2-4131-9955-a9098f1347bb', 'Is update', 'is_update', 'condition', 19, 1, '{"filter":{"$trigger":{"event":{"_eq":"registrations.items.update"}}}}', '8dac1c3d-1e65-4739-80c2-1a804674873a', '9099bb22-5cda-4463-ab87-88ccbaf7c418', '93c8399e-f2b9-4808-9904-e01dac447ef8', '2024-10-15 10:41:19.932+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('414a0e49-23f9-4a48-9a4e-38c9df97f3ca', 'Send mail', 'send_mail', 'trigger', 19, 1, '{"flow":"f74f1cff-ee5a-44b1-b2d4-405492a48435","payload":"{{$trigger.payload}}"}', NULL, NULL, 'e8e1ae99-744b-4044-a0dd-e213374c1363', '2024-10-26 07:35:39.81+00', 'c18c33a4-997f-44fc-ab47-dc8bd0c4c987') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('2096eef8-f2b2-4fb0-ac63-fec9c314cf98', 'matching_registrations', 'matching_registrations', 'item-read', 73, 1, '{"collection":"icbd_activities_registrations","query":{"filter":{"_and":[{"icbd_activity":{"_eq":"{{activity.id}}"}},{"start":{"_eq":"{{timeslot.start_time}}"}}]}},"permissions":"$full"}', '41cf9d40-ab8e-4008-801b-bc5fc4aaac30', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 10:58:44.09+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('1f6c5cbc-e8e5-4a34-8e10-8ec80ea5bf90', 'timeslot', 'timeslot', 'exec', 55, 1, '{"code":"module.exports = async function(data) {\n\treturn data.activity.timeslots.find(t => t.start_time == data.activity_registration.start);\n}"}', '2096eef8-f2b2-4fb0-ac63-fec9c314cf98', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 10:44:05.24+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('eace127e-4319-4697-9c00-12e6db9d1771', 'Update Data', 'item_update_wrcj6', 'item-update', 127, 1, '{"collection":"icbd_activities","permissions":"$full","key":["{{activity.id}}"],"payload":"{{new_activity}}"}', NULL, NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 11:23:05.352+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('e01b1bbf-0b57-4cd1-b1dc-325403f396cf', 'new_activity', 'new_activity', 'exec', 109, 1, '{"code":"module.exports = async function(data) {\n    copy = JSON.parse(JSON.stringify(data.activity));\n    \n    copy.timeslots.find(t => t.start_time == data.activity_registration.start).full = data.is_full;\n    \n\treturn copy;\n}"}', 'eace127e-4319-4697-9c00-12e6db9d1771', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 11:21:18.309+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('41cf9d40-ab8e-4008-801b-bc5fc4aaac30', 'Run Script', 'is_full', 'exec', 91, 1, '{"code":"module.exports = async function(data) {\n\t// Do something...\n\treturn typeof data.timeslot.max_attendees === \"number\" && data.timeslot.max_attendees <= data.matching_registrations.length;\n}"}', 'e01b1bbf-0b57-4cd1-b1dc-325403f396cf', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 11:02:06.435+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('795aa358-be8a-4c41-9d53-dfedf7e5e65d', 'activity', 'activity', 'item-read', 37, 1, '{"collection":"icbd_activities","permissions":"$full","key":["{{activity_registration.icbd_activity}}"]}', '1f6c5cbc-e8e5-4a34-8e10-8ec80ea5bf90', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 10:40:16.708+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;
INSERT INTO public.directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) VALUES ('3cd97be2-277f-42fb-93c6-50f20d8d24e5', 'activity_registration', 'activity_registration', 'item-read', 19, 1, '{"permissions":"$full","collection":"icbd_activities_registrations","key":["{{$trigger.keys[0]}}"]}', '795aa358-be8a-4c41-9d53-dfedf7e5e65d', NULL, 'd2ba770b-1958-4b19-bcd3-82193aac3a3d', '2025-02-15 10:38:50.611+00', '3a73ef81-34ee-442b-9927-1902087d2068') ON CONFLICT DO NOTHING;


ALTER TABLE public.directus_operations ENABLE TRIGGER ALL;

--
-- PostgreSQL database dump complete
--

