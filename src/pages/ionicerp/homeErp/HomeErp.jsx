import SoftwarePrice from "../softwarePrice/SoftwarePrice";
import TechnologyErp from "../technologyErp/TechnologyErp";
import BannerErp from "./bannerErp/BannerErp";
import Module from "./module/Module";
import ProductDetailsErp from "./productDetailsErp/ProductDetailsErp";


const HomeErp = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <BannerErp/>
            <ProductDetailsErp/>
            <Module heading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর মডিউল সমূহ'} subheading={'আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।'}/>
            <TechnologyErp heading={'আপনার প্রিয় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন'} subheading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে।'}/>
            <SoftwarePrice heading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার মূল্য পরিকল্পনা'} subheading={'``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।'} cardheading={'আপনার ব্যবসায়িক প্রক্রিয়া সহজ করতে এবং কাজের প্রবাহে দক্ষতা বাড়ানোর জন্য “আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর একটি প্যাকেজ দিয়ে আপনার যাত্রা শুরু করুন।'}/>
        </div>
    );
};

export default HomeErp;