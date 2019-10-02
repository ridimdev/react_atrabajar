import React, { Component } from 'react'
import './listarpacientes.css'
import {Table,Row,Col,Input,InputGroup,Form,FormGroup,Label,CustomInput} from 'reactstrap'
import icosearch from '../ico/search.svg'
import usermale from '../ico/usermale.svg'
import moment from 'moment';
import RegPacModal from './RegPacModal'


export default class ListarCV extends Component {
constructor(props){
    super(props);
    this.state={
        search:''
    }
}
 
toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

    // updateSearch(e){
    //     this.setState({     
    //         search:e.target.value.toUpperCase().substr(0,20)
    //        });
    // }
    render() {
    // let filtrado = this.props.micv.filter(
    //     (micv) => {
    //         return micv.data.P02.indexOf(this.state.search) !== -1;
    //     }
    // );
    // const{search}=this.state;
    const micv=this.props.micv;
    return (
      <div>  
      <Row>
      <Col md={10}>
      <b><p>Mi CV</p></b>
      </Col>
      <Col md={2}>
      <img src={usermale} className="icosexo"  alt="fotopac"/>
      </Col>
      </Row>
                
                
      <Form>
      <FormGroup>
        <Label for="P02">Nombres</Label>
        <Input required type="text" name="P02" id="P02"  onChange={this.changeP02V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P02">Apellidos</Label>
        <Input required type="text" name="P02" id="P02"  onChange={this.changeP02V}/>
      </FormGroup>
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="P05">Fecha de Nacimiento</Label>
            <Input type="date" name="P05" id="P05"  onChange={this.changeP05V}/>
          </FormGroup>   
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="P04">Genero</Label>
            <CustomInput type="select" id="P04" name="P04"  onChange={this.changeP04V}>
              <option value="">Seleccionar</option>
              <option value='MASCULINO'>Masculino</option>
              <option value='FEMENINO'>Femenino</option>
              <option value='OTRO'>Otro</option>
            </CustomInput>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="P04">Estado Civil</Label>
            <CustomInput type="select" id="P04" name="P04"  onChange={this.changeP04V}>
              <option value="">Seleccionar</option>
              <option value='MASCULINO'>Soltero/a</option>
              <option value='FEMENINO'>Casado/a</option>
              <option value='OTRO'>Unión Libre</option>
              <option value='OTRO'>Divorciado/a</option>
              <option value='OTRO'>Pareja de Hecho</option>
              <option value='OTRO'>Viudo/a</option>
            </CustomInput>
          </FormGroup>
        </Col>
        <Col md={5}>
        <FormGroup>
          <Label for="P17">Nacionalidad</Label>
          <CustomInput type="select" id="P04" name="P04"  onChange={this.changeP04V}>
              <option value="">Peru</option>
              <option value='MASCULINO'>Alemania</option>
              <option value='FEMENINO'>Argentina</option>
              <option value='FEMENINO'>Australia</option>
              <option value='FEMENINO'>Austria</option>
              <option value='FEMENINO'>Bolivia</option>
              <option value='FEMENINO'>Brasil</option>
              <option value='FEMENINO'>Bulgaria</option>
              <option value='FEMENINO'>Bélgica</option>
              <option value='FEMENINO'>Canadá</option>
              <option value='FEMENINO'>Chile</option>
              <option value='FEMENINO'>China</option>
              <option value='FEMENINO'>Colombia</option>
              <option value='FEMENINO'>Corea</option>
              <option value='FEMENINO'>Costa Rica</option>
              <option value='FEMENINO'>Croacia</option>
              <option value='FEMENINO'>Cuba</option>
              <option value='FEMENINO'>Dinamarca</option>
              <option value='FEMENINO'>Ecuador</option>
              <option value='FEMENINO'>El Salvador</option>
              <option value='FEMENINO'>Emiratos Arabes</option>
              <option value='FEMENINO'>Escocia</option>
              <option value='FEMENINO'>Eslovaquia</option>
              <option value='FEMENINO'>Eslovenia</option>
              <option value='FEMENINO'>Espana</option>
              <option value='FEMENINO'>Estados Unidos</option>
              <option value='FEMENINO'>Estonia</option>
              <option value='FEMENINO'>Finlandia</option>
              <option value='FEMENINO'>Francia</option>
              <option value='FEMENINO'>Grecia</option>


            </CustomInput>
        </FormGroup>   
      </Col>
      <Col md={4}>
      <FormGroup>
            <Label for="P04">Tipo de documento</Label>
            <CustomInput type="select" id="P04" name="P04"  onChange={this.changeP04V}>
              <option value="">Seleccionar</option>
              <option value='MASCULINO'>DNI</option>
              <option value='FEMENINO'>Pasaporte</option>
            </CustomInput>
          </FormGroup>
    </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="P17">Número documento</Label>
            <Input type="number" name="P17" id="P17"  onChange={this.changeP17V} />
          </FormGroup>   
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="P07">Celular</Label>
            <Input type="number" name="P07" id="P07"  onChange={this.changeP07V} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="P06">Teléfono Fijo</Label>
            <Input type="number" name="P06" id="P06"  onChange={this.changeP06V}/>
          </FormGroup>                  
        </Col>
      </Row>
      <FormGroup>
        <Label for="P08">Correo electrónico</Label>
        <Input type="email" name="P08" id="P08"  onChange={this.changeP08V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P09">Dirección</Label>
        <Input type="text" name="P09" id="P09"  onChange={this.changeP09V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P10">Distrito</Label>
        <CustomInput type="select" id="P10" name="P10"  onChange={this.changeP10V}>
          <option value="">Seleccionar</option>
          <option value="ANCON">Ancón‎</option>
          <option value="ATE">Ate</option>
          <option value="BARRANCO">Barranco</option>
          <option value="BRENA">Breña‎</option>
          <option value="CARABAYLLO">Carabayllo</option>
          <option value="CHACLACAYO">Chaclacayo</option>
          <option value="CHORRILLOS">Chorrillos‎</option>
          <option value="CIENEGUILLA">Cieneguilla‎</option>
          <option value="COMAS">Comas</option>
          <option value="EL AGUSTINO">El Agustino</option>
          <option value="INDEPENDENCIA">Independencia</option>
          <option value="JESUS MARIA">Jesús María</option>
          <option value="LA MOLINA">La Molina</option>
          <option value="LA VICTORIA">La Victoria</option>
          <option value="LIMA">Lima‎</option>
          <option value="LINCE">Lince</option>
          <option value="LOS OLIVOS">Los Olivos</option>
          <option value="LURIGANCHO-CHOSICA">Lurigancho-Chosica</option>
          <option value="LURIN">Lurín</option>
          <option value="MAGDALENA DEL MAR">Magdalena del Mar</option>
          <option value="MIRAFLORES">Miraflores</option>
          <option value="PACHACAMAC">Pachacámac</option>
          <option value="PUCUSANA">Pucusana</option>
          <option value="PUEBLO LIBRE">Pueblo Libre</option>
          <option value="PUENTE PIEDRA">Puente Piedra</option>
          <option value="PUNTA HERMOSA">Punta Hermosa‎</option>
          <option value="PUNTA NEGRA">Punta Negra‎</option>
          <option value="RIMAC">Rímac‎</option>
          <option value="SAN BARTOLO">San Bartolo‎</option>
          <option value="SAN BORJA">San Borja</option>
          <option value="SAN ISIDRO">San Isidro</option>
          <option value="SAN JUAN DE LURIGANCHO">San Juan de Lurigancho</option>
          <option value="SAN JUAN DE MIRAFLORES">San Juan de Miraflores</option>
          <option value="SAN LUIS">San Luis</option>
          <option value="SAN MARTIN DE PORRES">San Martín de Porres‎</option>
          <option value="SAN MIGUEL">San Miguel</option>
          <option value="SANTA ANITA">Santa Anita</option>
          <option value="SANTA MARIA DEL MAR">Santa María del Mar</option>
          <option value="SANTA ROSA">Santa Rosa</option>
          <option value="SANTIAGO DE SURCO">Santiago de Surco</option>
          <option value="SURQUILLO">Surquillo</option>
          <option value="VILLA EL SALVADOR">Villa El Salvador</option>
          <option value="VILLA MARIA DEL TRIUNFO">Villa María del Triunfo‎</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="P11">Motivo de Consulta</Label>
        <Input type="text" name="P11" id="P11"  onChange={this.changeP11V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P12">Alergias</Label>
        <Input type="text" name="P12" id="P12"  onChange={this.changeP12V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P13">Medicamentos</Label>
        <Input type="text" name="P13" id="P13"   onChange={this.changeP13V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P14">Enfermedades Familiares y Personales</Label>
        <Input type="text" name="P14" id="P14"   onChange={this.changeP14V}/>
      </FormGroup>
      <FormGroup>
        <Label for="P15">Examen Clinico Extraoral</Label>
        <Input type="text" name="P15" id="P15"  onChange={this.changeP15V} />
      </FormGroup>
      <FormGroup>
        <Label for="P16">Examen Clinico Intraoral</Label>
        <Input type="text" name="P16" id="P16"  onChange={this.changeP16V} />
      </FormGroup>
    </Form>
        
      </div>
    )
  }
}
