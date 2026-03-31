document.addEventListener('DOMContentLoaded', async function() {
    window.scrollTo(0, 0);
    const leavesWrapper = document.getElementById('leavesWrapper');
    
    const leaves = [
        { file: 'leave-01.svg', left: '60%', top: '0' },
        { file: 'leave-02.svg', bottom: '0', left: '20%' },
        { file: 'leave-03.svg', bottom: '0', left: '35%' },
        { file: 'leave-04.svg', left: '95%', top: '40%' },
        { file: 'leave-05.svg', left: '80%', top: '0' },
        { file: 'leave-06.svg', left: '4%', bottom: '0' },
        { file: 'leave-07.svg', bottom: '0' },
        { file: 'leave-08.svg', left: '77%', top: '0' },
        { file: 'leave-09.svg', left: '98%', top: '40%' },
        { file: 'leave-10.svg', bottom: '0', left: '35%' },
        { file: 'leave-11.svg', left: '85%', top: '50%' },
        { file: 'leave-12.svg', bottom:'30%' }
    ];

    const loadLeaf = async (leafData, index) => {
        try {
            const response = await fetch(`assets/leaves/${leafData.file}`);
            const svgText = await response.text();
            
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            const svgElement = svgDoc.documentElement;
            
            svgElement.classList.add('leaf-svg');
            
            const paths = svgElement.querySelectorAll('path');
            paths.forEach((path, pathIndex) => {
                path.classList.add('leaf-path');
            });
            
            const leafDiv = document.createElement('div');
            leafDiv.className = 'leaf';
            leafDiv.id = `leaf-${index+1}`;
            leafDiv.dataset.index = index;
            leafDiv.style.position = 'absolute';
            
            if (leafData.left) leafDiv.style.left = leafData.left;
            if (leafData.right) leafDiv.style.right = leafData.right;
            if (leafData.top) leafDiv.style.top = leafData.top;
            if (leafData.bottom) leafDiv.style.bottom = leafData.bottom;
            
            leafDiv.appendChild(svgElement);
            leavesWrapper.appendChild(leafDiv);
            
            return leafDiv;
        } catch (error) {
            console.error(`Erro ao carregar ${leafData.file}:`, error);
            return null;
        }
    };

    for (let i = 0; i < leaves.length; i++) {
        await loadLeaf(leaves[i], i);
    }

    const allLeaves = document.querySelectorAll('.leaf');

    const scrollHandler = () => {
        const scrollTop = window.scrollY;
        
        if (scrollTop === 0) {
            allLeaves.forEach(leaf => {
                leaf.classList.remove('visible');
                const paths = leaf.querySelectorAll('.leaf-path');
                paths.forEach(path => {
                    path.classList.remove('path-visible');
                });
            });
            return;
        }
        
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        const leavesToShow = Math.floor(scrollPercent * leaves.length * 1.5);
        
        allLeaves.forEach((leaf, index) => {
            if (index <= leavesToShow) {
                if (!leaf.classList.contains('visible')) {
                    leaf.classList.add('visible');
                    
                    const paths = leaf.querySelectorAll('.leaf-path');
                    paths.forEach((path, pathIndex) => {
                        setTimeout(() => {
                            path.classList.add('path-visible');
                        }, pathIndex * 3);
                    });
                }
            } else {
                leaf.classList.remove('visible');
                const paths = leaf.querySelectorAll('.leaf-path');
                paths.forEach(path => {
                    path.classList.remove('path-visible');
                });
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });
});