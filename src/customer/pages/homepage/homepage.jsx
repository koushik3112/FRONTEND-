import React from 'react'
import maincarousel from '../../components/homecarousel/maincarousel'
const homepage = () => {
    return (
        <div>
            <maincarousel/>
            
            <div classsName='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
                <homesectioncarousel/>
                <homesectioncarousel/>
                <homesectioncarousel/>
                <homesectioncarousel/>
                <homesectioncarousel/>
                <homesectioncarousel/>
            </div>
        </div>
    )
}