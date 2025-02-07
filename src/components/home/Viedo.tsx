const videos = [
  {
    id: 1,
    title: "Video Title 1",
    description: "Video description text here lorem ipsum dolor sit amet",
    videoId: "xZNlYm9MSg4"
  },
  {
    id: 2,
    title: "Video Title 1",
    description: "Video description text here lorem ipsum dolor sit amet",
    videoId: "xZNlYm9MSg4"
  },
  {
    id: 3,
    title: "Video Title 1",
    description: "Video description text here lorem ipsum dolor sit amet",
    videoId: "xZNlYm9MSg4"
  },
  // Add more video objects here...
];
const VideoGrid = () => {
  
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-[10px] overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VideoGrid;