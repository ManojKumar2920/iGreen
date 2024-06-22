import Bamboo from '@/assets/bambooTree.jpg';
import BeechTree from '@/assets/beechtree.JPG';
import ButterflyPalm from '@/assets/butterflyPalm.JPG';
import Coconut from '@/assets/coconutTree.JPG';
import CubanPalm from '@/assets/cubanpalm.JPG';
import Guava from '@/assets/guavaTree.JPG';
import JavaPlum from '@/assets/javaPlumTree.JPG';
import NeemTree from '@/assets/neemTree.JPG';
import PeepalTree from '@/assets/peepalTree.JPG';
import PhoenixTree from '@/assets/phoenixtree.JPG';
import Ravenala from '@/assets/ravenala.JPG';
import ThailandShower from '@/assets/thailandshower.JPG';
import Pomegranate from '@/assets/pomegrante.webp';
import JeffreyPine from '@/assets/jeffreypine.jpg';
import HistoniaMacrophylla from '@/assets/HistoniaMacrophylla.jpg';
import PinkOleander from '@/assets/pinkoleander.webp';

import { IoMdArrowRoundForward as Arrow } from "react-icons/io";

const TreesContent = [
    {
        treename: 'Bamboo Tree',
        scientificname: 'Bambusa vulgaris',
        smalldesc: "Meet the bamboo, nature's skyscraper in green. Tall, slender, and witha knack for growing faster than your internet connection, bamboo is the unsung hero of the plant kingdom.",
        desc: "Meet the bamboo, nature's skyscraper in green. Tall, slender, and witha knack for growing faster than your internet connection, bamboo is the unsung hero of the plant kingdom. But what sets bamboo apart from the leafy crowd? Well, aside from its ability to reach for the sky in record time, bamboo is surprisingly versatile. From construction material to culinary delicacy, this plant does it all. Need a sturdy yet sustainable building material? Bamboo's got you covered. Craving some bamboo shoots in your stir-fry? It's a delicacy in the making.",
        funny: 'And remember, when life gets tough, be like bamboo—stand tall, stay grounded, and always sway with the wind.',
        image: Bamboo,
        icon: <Arrow />,
        slug: 'bamboo-tree'
    },
    {
        treename: 'Indian Beech Tree',
        scientificname: 'Pongamia pinnata',
        smalldesc: "Ah, the Indian Beech Tree, a.k.a. the unsung hero of the botanical world. While it may not have the flashy foliage of its more glamorous counterparts, this tree quietly goes about its business, offering a plethora of benefits to both man and Mother Nature.",
        desc: "Introducing the Indian Beech Tree, the unsung hero of the foliage world. While it may not boast the flamboyance of a peacock or the grandeur of an oak, this unassuming tree quietly works its magic, enriching both the environment and human life. With its unpretentious greenery and delicate clusters of white flowers, the Indian Beech Tree adds a touch of subtle elegance to any landscape. But don't be fooled by its modest appearance—this tree is a powerhouse of benefits. From its robust wood to its medicinal prowess, the Indian Beech Tree is a multitasking marvel. Need shelter from the scorching sun? Seek solace under its leafy branches. Seeking a natural remedy for skin ailments? Look no further than the oil derived from its seeds.",
        funny:"And remember, when life gets tough, be like the Indian Beech Tree—stay resilient, adapt to your surroundings, and don't forget to spread a littl shade and wisdom wherever you go.",
        image: BeechTree,
        icon: <Arrow />,
        slug: 'indian-beech-tree'
    },
    {
        treename: 'Yellow Butterfly Palm ',
        scientificname: 'Dypsis lutescens',
        smalldesc: "Say hello to the Yellow Butterfly Palm, the life of the tropical party. With its elegant arching fronds and sunny disposition, this palm brings a touch of the beach to wherever it’s planted. Sure, it might not have the grandeur of a towering oak, but it makes up for it with sheer tropical charm.",
        desc: "This palm doesn't just sit there looking pretty. It's also a champion air purifier, making your environment fresher and healthier. Its fronds are great at trapping dust, and it’s like having a natural air filter in your backyard. Plus, its bright green foliage and yellowish stems add a pop of color to any garden or indoor space. So next time you see a Yellow Butterfly Palm, give it a nod of respect. This cheerful palm is here to remind you that life doesn’t always have to be so serious—sometimes, it’s okay to just sway with the breeze and soak up the sunshine.",
        funny:'And remember, when life gets tough, be like the Yellow Butterfly Palm—stand tall, brighten up any room with your presence, and always reach for the light, no matter how shady things get.',
        image: ButterflyPalm,
        icon: <Arrow />,
        slug: 'yellow-butterfly-palm'
    },
    {
        treename: 'Coconut Tree',
        scientificname: 'Cocos nucifera',
        smalldesc: "Meet the Coconut Tree, the tropical superstar of the plant world. With its tall, slender trunk and iconic feathery fronds, this tree is the epitome of beachy vibes and island dreams. But it's not just about good looks—this tree is as practical as it is picturesque.",
        desc: "From providing refreshing coconut water to being the source of versatile coconut oil, the Coconut Tree is a one-stop shop for nourishment and hydration. Its sturdy leaves can be woven into mats, and its fibrous husks are perfect for making ropes and brushes. Talk about multi-talented! So next time you see a Coconut Tree swaying in the breeze, remember that it’s not just a pretty face. It’s a powerhouse of utility and tropical charm, giving us all a reason to dream of sandy shores and sunny days.",
        funny:'And remember, when life gets tough, be like the Coconut Tree—stay grounded, keep your head in the sun, and always find a way to stay cool and versatile.',
        image: Coconut,
        icon: <Arrow />,
        slug: 'coconut-tree'
    },
    {
        treename: 'Cuban Royal Palm',
        scientificname: 'Roystonea regia',
        smalldesc: "Introducing the Cuban Royal Palm, the regal monarch of the palm family. With its stately trunk and elegant fronds, this tree brings a touch of royal splendor to any landscape. Known for its striking appearance, the Cuban Royal Palm stands tall and proud, embodying grace and resilience.",
        desc: "Introducing the Cuban Royal Palm, the regal monarch of the palm family. With its stately trunk and elegant fronds, this tree brings a touch of royal splendor to any landscape. Known for its striking appearance, the Cuban Royal Palm stands tall and proud, embodying grace and resilience. Beyond its majestic looks, this palm is incredibly versatile. Its robust trunk is often used in construction, and its leaves are perfect for weaving. The Cuban Royal Palm isn’t just a pretty face; it's a hardworking member of the plant kingdom.",
        funny:'And remember, when life gets tough, be like the Cuban Royal Palm—stand tall, stay elegant, and always wear your crown with grace, even when the winds blow strong.',
        image: CubanPalm,
        icon: <Arrow />,
        slug: 'cuban-palm'
    },
    {
        treename: 'Guava Tree',
        scientificname: 'Psidium guajava',
        smalldesc: "Meet the Guava Tree, the tropical treasure trove of the fruit world. With its lush green leaves and aromatic fruit, this tree is a feast for the senses. Not only does it provide delicious guavas, but it also offers a myriad of health benefits, making it a true superfood source.",
        desc: "The Guava Tree is a gardener's delight, easy to grow and maintain, thriving in a variety of soils and climates. Its fruit is rich in vitamin C, fiber, and antioxidants, perfect for everything from refreshing juices to tasty desserts. The leaves are also used in traditional medicine, showcasing the tree's versatility. So, next time you see a Guava Tree, take a moment to appreciate its bounty. It’s a reminder that some of the best things in life come in sweet, small packages.",
        funny:'And remember, when life gets tough, be like the Guava Tree—stay fruitful, spread sweetness, and always stand firm, no matter how challenging the conditions.',
        image: Guava,
        icon: <Arrow />,
        slug: 'guava-tree'
    },
    {
        treename: 'Java Plum Tree',
        scientificname: 'Syzygium cumini',
        smalldesc: "Introducing the Java Plum, also known as Jamun, the unsung hero of the tropical fruit world. With its glossy green leaves and rich, purple-black fruit, this tree is both a visual delight and a nutritional powerhouse. The Java Plum isn’t just about good looks—it’s packed with vitamins and antioxidants, making it a favorite in traditional medicine.",
        desc: "The Java Plum thrives in various conditions, proving its resilience. Its fruit is enjoyed fresh or used in jams, jellies, and even wines, adding a touch of exotic flavor to any dish. The seeds, bark, and leaves are also utilized in traditional remedies, showcasing the tree's incredible versatility. So, the next time you encounter a Java Plum Tree, give it a nod of respect. It’s a testament to nature’s ability to provide both beauty and utility, all wrapped up in one magnificent tree.",
        funny:'And remember, when life gets tough, be like the Java Plum—stay resilient, offer sweetness in every situation, and prove that even the most unassuming trees can bear the richest fruits.',
        image: JavaPlum,
        icon: <Arrow />,
        slug: 'java-plum-tree'
    },
    {
        treename: 'Neem Tree',
        scientificname: 'Azadirachta indica',
        smalldesc: "Introducing the Neem Tree, nature's pharmacy and the ultimate symbol of resilience. With its broad canopy and evergreen leaves, the Neem Tree stands as a testament to the wonders of the natural world. Renowned for its myriad medicinal properties, this tree is a cornerstone of traditional remedies, offering benefits from its roots to its leaves.",
        desc: "The Neem Tree is a true multitasker. Its bitter leaves and bark are used in various treatments, from skin ailments to dental care, while neem oil is a popular natural pesticide. Beyond its medicinal uses, the Neem Tree provides shade and purifies the air, making it a valuable addition to any landscape. So, the next time you see a Neem Tree, take a moment to appreciate its multifaceted contributions. It’s a living reminder that nature often provides the best solutions to our problems, wrapped up in one incredible tree.",
        funny:'And remember, when life gets tough, be like the Neem Tree—stand strong, be versatile, and always offer a remedy for whatever comes your way.',
        image: NeemTree,
        icon: <Arrow />,
        slug: 'neem-tree'
    },
    {
        treename: 'Peepal Tree',
        scientificname: 'Ficus religiosa',
        smalldesc: "Meet the Peepal Tree, the sacred sentinel of the plant world. With its heart-shaped leaves and wide-reaching branches, this tree holds a special place in the hearts of many cultures and religions. Revered for its spiritual significance and medicinal properties, the Peepal Tree is more than just a tree—it's a symbol of life, wisdom, and eternal growth.",
        desc: "The Peepal Tree is believed to be the abode of several Hindu deities and is often associated with enlightenment and knowledge. Its leaves are used in traditional medicine to treat various ailments, from digestive issues to skin problems. Beyond its spiritual and medicinal uses, the Peepal Tree provides shade and shelter, inviting contemplation and reflection. So, the next time you encounter a Peepal Tree, take a moment to pause and reflect. It’s a living reminder of the interconnectedness of all life and the enduring power of faith and healing.",
        funny:'And remember, when life gets tough, be like the Peepal Tree—stand tall, embrace change, and draw strength from your roots as you reach for the sky.',
        image: PeepalTree,
        icon: <Arrow />,
        slug: 'peepal-tree'
    },
    {
        treename: 'Phoenix Tree',
        scientificname: 'Phoenix dactylifera',
        smalldesc: "Introducing the Phoenix Tree, also known as the Date Palm, the epitome of desert resilience and sweet indulgence. With its towering stature and feathery fronds, this tree stands as a testament to nature's ability to thrive in harsh environments. But it's not just about survival—the Phoenix Tree bears fruit that is as sweet as it is nutritious, earning it a special place in the hearts and diets of people around the world.",
        desc: "The Phoenix Tree's fruit, the date, is packed with energy-boosting nutrients and antioxidants, making it a favorite snack for adventurers and athletes alike. Beyond its culinary uses, the Phoenix Tree provides shade, shelter, and a touch of exotic beauty to desert landscapes, enriching both the environment and human experience. So, the next time you see a Phoenix Tree standing tall against the desert sun, take a moment to admire its resilience and savor the sweet taste of its fruit. It's a reminder that even in the harshest of conditions, life finds a way to flourish.",
        funny:'And remember, when life gets tough, be like the Phoenix Tree—stand tall, stay sweet, and rise from the ashes of adversity with grace and resilience.',
        image: PhoenixTree,
        icon: <Arrow />,
        slug: 'phoenix-tree'
    },
    {
        treename: 'Travelers Palm',
        scientificname: ' Ravenala madagascariensis',
        smalldesc: "Meet the Traveler's Palm, the exotic wanderer of the plant world. With its striking fan-shaped leaves and tall, upright trunk, this tree is a beacon of tropical allure and adventure. Despite its name, the Traveler's Palm isn't actually a palm—it's a member of the banana family, but don't let that stop you from dreaming of far-off destinations and swaying in the breeze.",
        desc: "Native to Madagascar, the Traveler's Palm is known for its ability to store rainwater in its leaf bases, providing a much-needed source of hydration for thirsty travelers in the jungle. Its leaves also align themselves in an east-west direction, offering a natural compass for those navigating the wilderness. So, the next time you encounter a Traveler's Palm, let your imagination soar. It's a tree that embodies the spirit of exploration and discovery, beckoning you to follow wherever the winds of adventure may lead.",
        funny:'And remember, when life gets tough, be like the Travelers Palm—stand tall, stay flexible, and embrace the journey with open arms, wherever it may take you.',
        image: Ravenala,
        icon: <Arrow />,
        slug: 'travelers-palm'
    },
    {
        treename: 'Thailand Shower',
        scientificname: 'Cassia bakeriana',
        smalldesc: "Introducing the Thailand Shower Tree, the botanical marvel that brings joy and color to the Thai landscape. With its cascading clusters of vibrant pink or white flowers, this tree is a sight to behold, showering the surroundings with beauty and fragrance. Native to Thailand and other parts of Southeast Asia, the Thailand Shower Tree is celebrated for its ornamental value and cultural significance.",
        desc: "During its blooming season, typically in late spring to early summer, the Thailand Shower Tree transforms streets and gardens into enchanting floral displays, attracting admirers and photographers alike. Its flowers not only dazzle the eyes but also attract pollinators, contributing to the biodiversity of the ecosystem. So, the next time you find yourself in Thailand during the blooming season, keep an eye out for the Thailand Shower Tree. It's a living celebration of nature's beauty and a reminder to stop and appreciate the simple joys that surround us.",
        funny:"And remember, when life gets dull, be like the Thailand Shower Tree—burst into bloom, shower the world with color, and make every moment a celebration of life's beauty.",
        image: ThailandShower,
        icon: <Arrow />,
        slug: 'thailand-shower'
    },
    {
        treename: 'Pink Oleander',
        scientificname: 'Nerium oleander',
        smalldesc: "Nerium oleander, commonly known as Pink Oleander, is an evergreen shrub or small tree known for its vibrant pink flowers. It is drought-tolerant and often used in landscaping for its beauty and resilience. However, all parts of the plant are highly toxic if ingested.",
        desc: "Meet the Pink Oleander, scientifically known as Nerium oleander. This charming little shrub, with its eye-catching pink flowers, adds a splash of color to any garden. As a bonus, it's drought-tolerant, so you can neglect it and it'll still look fabulous. Just remember, every part of this plant is highly toxic, so it's perfect for those who enjoy living on the edge and like to keep their pets and kids on their toes!",
        funny:"The Pink Oleander (Nerium oleander) is like that person who looks stunning and can endure any hardship—thriving in poor soil, intense heat, and drought. Just like some people.",
        image: PinkOleander,
        icon: <Arrow />,
        slug: 'pink-oleander'
    },
    {
        treename: 'Histonia Macrophylla',
        scientificname: 'Hiptage benghalensis',
        smalldesc: "Hiptage benghalensis, commonly known as Hiptage or Histonia macrophylla, is a fast-growing, woody climbing vine or shrub with fragrant white, yellow, or pink flowers. It is often found in tropical and subtropical regions and is prized for its ornamental beauty.",
        desc: "Meet Hiptage benghalensis, the overachiever of the plant world. This rapid climber will take over your garden in no time, with its lush foliage and fragrant flowers. Perfect for those who want a plant that’s as invasive as their nosy neighbor, it’ll make sure no other plants stand a chance. Enjoy the beautiful blooms while they slowly smother everything else you’ve planted!",
        funny:"Hiptage benghalensis is like that friend who’s effortlessly charming and always steals the show. With its rapid growth and beautiful, fragrant flowers, it thrives almost anywhere,",
        image: HistoniaMacrophylla,
        icon: <Arrow />,
        slug: 'histonia-macrophylla'
    },
    {
        treename: 'Pomegranate',
        scientificname: 'Punica granatum',
        smalldesc: "Punica granatum, commonly known as pomegranate, is a deciduous shrub or small tree known for its bright red fruit filled with juicy, jewel-like seeds. It is native to the region stretching from Iran to northern India and has been cultivated throughout the Mediterranean and other warm climates.",
        desc: "Meet the pomegranate, Punica granatum, the fruit that’s like a DIY project. With its tough skin and countless tiny seeds, it offers a delightful challenge for those who think eating should come with extra effort. Enjoy the sweet, tangy arils—if you have the patience to get to them! Punica granatum, commonly known as pomegranate, is a deciduous shrub or small tree known for its bright red fruit filled with juicy, jewel-like seeds. It is native to the region stretching from Iran to northern India and has been cultivated throughout the Mediterranean and other warm climates.",
        funny:"The pomegranate is like that friend who’s hard to get to know but worth the effort. You have to get past the tough exterior and deal with some complications (those seeds!), but once you do, you’re rewarded with something incredibly rich and satisfying.",
        image: Pomegranate,
        icon: <Arrow />,
        slug: 'Pomegranate'
    },
    {
        treename: 'Jeffrey Pine',
        scientificname: 'Pinus jeffreyi',
        smalldesc: "Pinus jeffreyi, commonly known as Jeffrey Pine, is a large coniferous tree native to the mountains of the western United States. It has long, bluish-green needles and large, distinctive cones. The tree is known for its pleasant vanilla or pineapple scent emitted from its bark.",
        desc: "Meet the Jeffrey Pine, Pinus jeffreyi, the tree that smells like a dessert but is definitely not edible. Standing tall and proud, it’s perfect for those who want a majestic tree that occasionally drops massive cones on unsuspecting passersby. Enjoy the refreshing scent of vanilla and pineapple—just don’t expect it to make your life any easier.",
        funny:"The Jeffrey Pine is like that person who always smells amazing and stands out in a crowd. With its towering height and fragrant bark, it's hard to miss. Just like someone who seems great until you get to know them, this tree can drop hefty cones that can be quite a nuisance if you're not paying attention!",
        image: JeffreyPine,
        icon: <Arrow />,
        slug: 'jeffrey-pine'
    },

];

export default TreesContent;
