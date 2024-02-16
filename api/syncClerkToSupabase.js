const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async (req, res) => {
  if (req.method === 'POST') {
    // Parse the incoming webhook payload
    const { id, email } = req.body.data;

    // Insert or update user data in Supabase
    const { error } = await supabase
      .from('users')
      .upsert({ id, email }, { onConflict: 'id' });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
