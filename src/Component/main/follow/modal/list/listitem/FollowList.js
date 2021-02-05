import React, { Component } from 'react';

class FollowList extends Component {
    render() {
        return (
            <div className="f-list-body">
                <div className='f-list-bar'>
                    <div className='f-list-box'>
                        <div style={{marginBottom:'-45px'}} className='f-list-item'>
                            <div className='f-list-img' style={{position:'relative',top:'20px',left:'20px'}}>
                                <img style={{width:'70px',height:'70px',borderRadius:'100%'}} src='https://lh3.googleusercontent.com/proxy/iOeazXhN3Y37l4Dv31wBaTXI26aKoWCa_ppyIGA0GLPrvsi2noHeqqh-_5JM9yGBxNTlPhP9b0h_5FL58uOBCld2LnPnkmtF1hy3Q8LMIN7kyu8BHWU9XsC8L4Imuz_xQROdF8SlFg'></img>
                            </div>
                            <div style={{position:'relative',left:'120px',top:'-40px'}} className='f-list-text'>
                               <div className='f-list-id'>이상헌</div>
                               <div className='f-list-nick'>이상헌</div>
                            </div>
                            <button style={{position:'relative',left:'350px',top:'-70px'}} type='button' className='f-list-del'>삭제</button>
                        </div>
                        <div className='f-list-item'>
                            <div className='f-list-img' style={{position:'relative',top:'20px',left:'20px'}}>
                                <img style={{width:'70px',height:'70px',borderRadius:'100%'}} src='https://lh3.googleusercontent.com/proxy/iOeazXhN3Y37l4Dv31wBaTXI26aKoWCa_ppyIGA0GLPrvsi2noHeqqh-_5JM9yGBxNTlPhP9b0h_5FL58uOBCld2LnPnkmtF1hy3Q8LMIN7kyu8BHWU9XsC8L4Imuz_xQROdF8SlFg'></img>
                            </div>
                            <div style={{position:'relative',left:'120px',top:'-40px'}} className='f-list-text'>
                               <div className='f-list-id'>이상헌</div>
                               <div className='f-list-nick'>이상헌</div>
                            </div>
                            <button style={{position:'relative',left:'350px',top:'-70px'}} type='button' className='f-list-del'>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FollowList;