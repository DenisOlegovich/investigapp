import { ReactCompareSlider } from 'react-compare-slider'

import { CompareSliderProps } from './type'
import CompareSliderItem from './CompareSliderItem'

export default function CompareSlider({ items, ...props }: CompareSliderProps) {
    return (
        <div {...props}>
            <ReactCompareSlider
                className="overflow-hidden rounded-[.8rem]"
                onlyHandleDraggable={true}
                itemOne={
                    <CompareSliderItem
                        side="left"
                        {...items[0]}
                    />
                }
                itemTwo={
                    <CompareSliderItem
                        side="right"
                        {...items[1]}
                    />
                }
            />
        </div>
    )
}
