"use client";

import Player from "@/components/editor/player/player";
import Timeline from "@/components/editor/timeline/timeline";
import useTimelineEvents from "@/hooks/use-timeline-events";
import useStore from "@/store/store";

export default function ProjectPage() {
  const { playerRef } = useStore();
  useTimelineEvents();
  return (
    <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-6xl flex-1  w-full h-full flex border">
          <Player />
        </div>
        </div>
      {playerRef && <Timeline />}
    </div>
  );
}