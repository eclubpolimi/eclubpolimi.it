
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../ui/dialog';
import type { SiteImageAsset } from '../../lib/contentful';

interface EventHighlightGalleryProps {
    highlightPhotos: SiteImageAsset[];
}

const EventHighlightGallery: React.FC<EventHighlightGalleryProps> = ({ highlightPhotos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {highlightPhotos.map((photo) => (
                <Dialog key={photo.key}>
                    <DialogTrigger asChild>
                        <div className="bg-white rounded-md shadow overflow-hidden cursor-pointer">
                            <img src={photo.imageLightMode?.url} alt={photo.imageLightMode?.description} className="w-full h-48 object-cover" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] flex items-center justify-center">
                        <img src={photo.imageLightMode?.url} alt={photo.imageLightMode?.description} className="max-w-full max-h-full object-contain" />
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
};

export default EventHighlightGallery;
