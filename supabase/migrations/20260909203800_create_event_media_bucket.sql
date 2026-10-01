-- Creates the private storage bucket the app uploads photos and videos to.
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('event-media', 'event-media', false, 104857600)
ON CONFLICT (id) DO NOTHING;
