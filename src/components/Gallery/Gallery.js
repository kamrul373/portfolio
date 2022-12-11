import React from 'react';
import "./Gallery.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Gallery = ({ gallery }) => {
    console.log(gallery)
    return (
        <>
            <PhotoProvider className='lg:h-[400px] '>
                {
                    gallery.map(pic => <div >

                        <PhotoView src={pic}>
                            <img src={pic} alt="" />
                        </PhotoView>

                    </div>)
                }
            </PhotoProvider>
        </>
    );
};

export default Gallery;