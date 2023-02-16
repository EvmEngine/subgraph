import { 
  EVME_BaseContractCreated,
  EVME_ModulePublished,
  EVME_ModuleUpdated,
  EVME_ModuleStatusUpdated,
  EVME_ModuleInstallerUpdated
} from './types/Factory/Factory'
import { 
  Factory, 
  BaseContract,
  Module 
} from './types/schema'
import {
  ZERO_BI,
  ONE_BI,
  FACTORY_ADDRESS,
  BLANK_BYTES32,
  URL
} from './helpers'
import { log, BigInt, Address } from '@graphprotocol/graph-ts'
import { BaseContract as BaseContractTemplate } from './types/templates'


export function handleNewBaseContract(event: EVME_BaseContractCreated): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.totalBaseContracts = ZERO_BI;
  } 
  
  factory.totalBaseContracts = factory.totalBaseContracts.plus(ONE_BI);
  factory.save()

  let baseContract_ = new BaseContract(event.params.base_contract.toHexString()) as BaseContract
  baseContract_.modules = [];
  baseContract_.createdAtTimestamp = event.block.timestamp

  BaseContractTemplate.create(event.params.base_contract)

  baseContract_.save()
  factory.save()
}


export function handleNewModules(event: EVME_ModulePublished): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.totalModules = ZERO_BI;
  } 

  let module = new Module(event.params.module.toHexString())
  module.moduleAddress = event.params.module.toHexString()
  module.publisher = event.params.publisher.toHexString()
  module.namespace = event.params.namespace.toString()
  module.title = event.params.title.toString()
  module.info = event.params.info.toString()
  module.fee = event.params.fee
  module.status = 1
  module.active_install = ZERO_BI
  module.createdAtTimestamp = event.block.timestamp

  module.save()

  factory.totalModules = factory.totalModules.plus(ONE_BI);
  factory.save()
}

export function handleModuleUpdated(event: EVME_ModuleUpdated): void {
  let module = Module.load(event.params.module.toHexString())
  module.title = event.params.title.toString()
  module.info = event.params.info.toString()
  module.namespace = event.params.namespace.toHexString()

  module.save()
}

export function handleModuleStatus(event: EVME_ModuleStatusUpdated): void {
  let module = Module.load(event.params.module.toHexString())
  module.status = event.params.status

  module.save()
}

export function handleModuleInstallerUpdate(event: EVME_ModuleInstallerUpdated): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  let module = Module.load(event.params.module.toHexString())

  factory.installerModule = module.id

  factory.save()
}
