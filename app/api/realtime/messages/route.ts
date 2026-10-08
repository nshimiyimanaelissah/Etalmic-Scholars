export async function GET() {
  const encoder = new TextEncoder();
  const feed = [
    {
      title: 'STEM scholarship alert',
      channel: 'Ministry',
      message: 'New STEM funding update published for high school students in science and engineering tracks.',
      time: 'just now',
    },
    {
      title: 'Coding program reminder',
      channel: 'Instagram',
      message: 'One Million Coders program registration window reopened for eligible students.',
      time: '2 minutes ago',
    },
    {
      title: 'Robotics camp invitation',
      channel: 'WhatsApp',
      message: 'A regional robotics camp is open to students with engineering, coding, and design interests.',
      time: '7 minutes ago',
    },
    {
      title: 'School scholarship bulletin',
      channel: 'Newsletter',
      message: 'The school bulletin highlights science and mathematics scholarship opportunities for grade 12 learners.',
      time: '20 minutes ago',
    },
  ];

  const stream = new ReadableStream({
    start(controller) {
      let index = 0;

      const push = () => {
        const payload = feed[index % feed.length];
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
        index += 1;
      };

      push();
      const interval = setInterval(push, 5000);

      return () => clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
