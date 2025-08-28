
import { sendContactMail } from '@/utils/sendContactMail';

export async function POST(req) {
  try {
    const { fullName, phoneNumber, email, message } = await req.json();
    const result = await sendContactMail({ fullName, phoneNumber, email, message });
    if (result.success) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: result.error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
