import { NativeSegmented } from "@/components/native-segmented";
import { PhotoGrid } from "@/components/photo-grid";
import { ScreenScaffold } from "@/components/screen-scaffold";
import { RANDOM_COLLECTION, RECENT_SAVES } from "@/constants/app";
import { useState } from "react";

const TABS = ["Saved", "Liked"] as const;

export default function Library() {
  const [index, setIndex] = useState(0);
  const images = index === 0 ? RECENT_SAVES : RANDOM_COLLECTION;

  return (
    <ScreenScaffold withHeader>
      <NativeSegmented
        options={TABS}
        selectedIndex={index}
        onChange={setIndex}
      />

      <PhotoGrid images={[...images, ...images]} />
    </ScreenScaffold>
  );
}
