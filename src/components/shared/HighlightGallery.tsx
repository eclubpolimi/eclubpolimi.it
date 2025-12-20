import { useState } from 'react';
import type { SiteImageAsset } from '../../lib/contentful';
import {
    Dialog,
    DialogContent,
} from '../ui/dialog';

interface HighlightGalleryProps {
    photos: SiteImageAsset[];
}

export default function HighlightGallery({ photos }: HighlightGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<SiteImageAsset | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <div
                        key={photo.key}
                        className="bg-white rounded-md shadow overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(photo)}
                    >
                        <img
                            src={photo.imageLightMode?.url ?? ""}
                            alt={photo.imageLightMode?.description ?? "Gallery photo"}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                    {selectedImage && (
                        <img
                            src={selectedImage.imageLightMode?.url ?? ""}
                            alt={selectedImage.imageLightMode?.description ?? "Gallery photo"}
                            className="w-full h-full object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
