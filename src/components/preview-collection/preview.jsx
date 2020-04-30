import React from 'react';
import './preview.scss';
import PreviewItem from '../../components/preview-item/preview-item';

const PreviewCollection = ({title, imageUrl, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherProps}) => (
                <PreviewItem key={id} {...otherProps} />
            ))}
        </div>
    </div>
)

export default PreviewCollection;