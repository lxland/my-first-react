import React, {Component} from 'react';
import { Button } from 'antd';
import banner from '../assets/images/tz.jpg';

export default class myCard extends Component {
   
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button type="primary" shape="circle" icon="download" />
                <Button type="primary" shape="circle" icon="form" />

                <div className="py">
                    <ruby>我<rt>diāo</rt></ruby>
                    <ruby>厉<rt>chóng</rt></ruby>  
                    <ruby>害<rt>xiǎo</rt></ruby>
                    <ruby>吧<rt>jì</rt></ruby>  
                </div>
                
                <p className="doclist">2342354</p>
                <img src={banner} />
            </div>
            

        )
    }
}