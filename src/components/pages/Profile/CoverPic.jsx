
import { Card } from 'flowbite-react';

export default function CoverPic() {
  return (
    <Card
      className="w-full"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"      
      style={{height: '300px'}}
    >
    </Card>
  );
}

// <div class="">
//   <img src="your-image-url.jpg" alt="Cover Photo" class="w-full h-auto object-cover">
// </div>
