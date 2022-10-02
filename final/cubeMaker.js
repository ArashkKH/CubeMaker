const containers = document.getElementsByClassName('threeDme')
const classFace = ['z','x','y']

for(let i = 0; i<containers.length; i++){
    const data = containers[i].getAttribute('data-dimensions').split(',')
    const dimensions = [[data[0],data[1]] , [data[2],data[1]] , [data[0],data[2]]]
    containers[i].style.width=data[0]+'px'
    containers[i].style.height=data[1]+'px'

    for(let j = 0; j<3; j++){
        let flag = 1
        for(let k = 0; k<2; k++){
            let temp = document.createElement('div')
            temp.style.width=dimensions[j][0]+'px'
            temp.style.height=dimensions[j][1]+'px'
            temp.classList.add('face-'+classFace[j])
            temp.style.position='absolute'
            temp.style.top='50%'
            temp.style.left='50%'

            if(j==0){
                temp.style.transform='translate(-50%,-50%)rotateY('+(flag-1)*-90 +'deg)translateZ('+(data[2]/+2)+'px)'
            }else if(j==1){
                temp.style.transform='translate(-50%,-50%)rotateY(90deg)rotateY('+(flag-1)*-90 +'deg)translateZ('+(data[0]/-2)+'px)'
            }else if(j==2){
                temp.style.transform='translate(-50%,-50%)rotateX(90deg)rotateY('+(flag-1)*-90 +'deg)translateZ('+(data[1]/-2)+'px)'
            }

            containers[i].appendChild(temp)
            flag*=-1
            
            
        }
    }    
}
