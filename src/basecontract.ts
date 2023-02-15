import { 
  EVME_ModuleInstalled,
  EVME_ModuleRemoved,
  EVME_RoleGiven
} from './types/templates/BaseContract/BaseContract'
import { 
  Factory, 
  BaseContract,
  Module,
  User,
  UserBaseContracts
} from './types/schema'
import {
  ONE_BI,
  FACTORY_ADDRESS,
} from './helpers'
import { log, BigInt, Address } from '@graphprotocol/graph-ts'


export function handleModuleInstalled(event: EVME_ModuleInstalled): void {
  let baseContract_ = BaseContract.load(event.address.toHexString())
  let module = Module.load(event.params.module.toHexString())
  let factory = Factory.load(FACTORY_ADDRESS)

  module.active_install = module.active_install.plus(ONE_BI)
  module.save()
  
  let modules = baseContract_.modules
  modules.push( module.id )

  baseContract_.modules = modules
  baseContract_.save()

  factory.totalInstallations = factory.totalInstallations.plus(ONE_BI);
  factory.save()
}


export function handleModuleRemoved(event: EVME_ModuleRemoved): void {
  let baseContract_ = BaseContract.load(event.address.toHexString())
  let module = Module.load(event.params.module.toHexString())
  let factory = Factory.load(FACTORY_ADDRESS)

  module.active_install = module.active_install.minus(ONE_BI)
  module.save()

  
  let modules = baseContract_.modules
  var index = modules.indexOf(module.id);
  if (index !== -1) {
    modules.splice(index, 1);
  }

  baseContract_.modules = modules
  baseContract_.save()

  factory.totalInstallations = factory.totalInstallations.minus(ONE_BI);
  factory.save()
}


export function handleRoleGiven(event: EVME_RoleGiven): void {
  let baseContract_ = BaseContract.load(event.address.toHexString())
  let user = User.load(event.params.user.toHexString())
  if(user === null){
    user = new User(event.params.user.toHexString())
    user.base_contracts = []
  }
  let ubIndex = event.address.toHexString().concat('-').concat(event.params.user.toHexString());
  let userBaseContracts = UserBaseContracts.load(ubIndex)
  if(userBaseContracts === null){
    userBaseContracts = new UserBaseContracts(ubIndex)
    userBaseContracts.base_contract = []
  }

  let base_contracts = userBaseContracts.base_contract
  base_contracts.push( event.address.toHexString() )

  userBaseContracts.base_contract = base_contracts
  userBaseContracts.user = event.params.user.toHexString()
  userBaseContracts.role_id = event.params.roleId
  userBaseContracts.createdAtTimestamp = event.block.timestamp
  userBaseContracts.save()

  let userBaseC = user.base_contracts
  userBaseC.push( userBaseContracts.id )

  user.base_contracts = userBaseC
  user.save();


  let base_contractsUsers = baseContract_.users
  base_contractsUsers.push( userBaseContracts.id )
  baseContract_.users = base_contractsUsers
  baseContract_.save()
}