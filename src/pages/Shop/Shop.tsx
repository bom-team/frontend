import React from 'react';
import styles from './Shop.module.scss';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {shopItems} from "../../mock/shop-items";

const ShopPage = () => {
    return (
        <div className={styles.root}>

            <div className={styles.topContainer}>
                <button className={styles.buyButton} >Buy</button>
                <button className={styles.donationButton} >Donation</button>
            </div>
            <ScrollArea.Root className={styles.root}>
                <ScrollArea.Viewport className={styles.viewPort}>
                    {shopItems.map((item, index) => (
                        <div key={item.imgUrl} className={styles.itemCard}>
                            <img src={item.imgUrl} />
                            <div className={styles.right}>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>

        </div>
    );
};

export default ShopPage;
